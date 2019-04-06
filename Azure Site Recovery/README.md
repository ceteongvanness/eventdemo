**Overview of Azure Site Recovery (ASR)**

**ASR Scenarios**

You can use Azure Site Recovery to replicate on-premises physical or virtual machines running Windows or Linux. Azure Site Recovery includes support for both Hyper-V and VMware virtual machines. You can replicate data from your on-premises datacenter to Azure or to a secondary sit. Orchestration is built in with Azure Site Recovery, which means that the management of replication, failover, and recovery is included. For example, should virtual machine or service fail in your datacenter, you can use Azure Site Recovery to failover to the replicated in either Azure or your secondary site.

Azure Site Recovery works in the following scenarios:

* Hyper-V Virtual Machine Replication
  When Virtual Machine Manager (VMM) is used to manage Hyper-V virtual machines, you can use Azure Site Recovery to replicate them to Azure or to a secondary datacenter. If you do not use VMM to manage your virtual machines, you can use Azure Site Recovery to replicate them to Azure only.
* VMware Virtual Machine Replication
  You can perform the replication of virtual machines by VMware to a secondary site that is also running VMware. You also can replicate to Azure.
* Physical Windows and Linux machines
  You can replicate physical machines running either Windows or Linux to a secondary site or to Azure.

`:white_check_mark:Are you considering using Azure Site Recovery?

For more information, you can see:

Site recovery - https://azure.microsoft.com/en-us/services/site-recovery/