**Overview of Azure Site Recovery (ASR)**

**ASR Scenarios**

You can use Azure Site Recovery to replicate on-premises physical or virtual machines running Windows or Linux. Azure Site Recovery includes support for both Hyper-V and VMware virtual machines. You can replicate data from your on-premises datacenter to Azure or to a secondary sit. Orchestration is built in with Azure Site Recovery, which means that the management of replication, failover, and recovery is included. For example, should virtual machine or service fail in your datacenter, you can use Azure Site Recovery to failover to the replicated in either Azure or your secondary site.

Azure Site Recovery works in the following scenarios:

* **Hyper-V Virtual Machine Replication**
  When Virtual Machine Manager (VMM) is used to manage Hyper-V virtual machines, you can use Azure Site Recovery to replicate them to Azure or to a secondary datacenter. If you do not use VMM to manage your virtual machines, you can use Azure Site Recovery to replicate them to Azure only.
* **VMware Virtual Machine Replication**
  You can perform the replication of virtual machines by VMware to a secondary site that is also running VMware. You also can replicate to Azure.
* **Physical Windows and Linux machines**
  You can replicate physical machines running either Windows or Linux to a secondary site or to Azure.

`:heavy_check_mark:Are you considering using Azure Site Recovery?

For more information, you can see:
Site recovery - https://azure.microsoft.com/en-us/services/site-recovery/

Site recovery - https://azure.microsoft.com/en-us/services/site-recovery/

**ASR Features**

Here are some reasons to use Azure Site Recovery.

* **Eliminate the need for disaster recovery sites**
  Your environment can be protected by automating the replication of the virtual machines based on policies that you set and control. Site Recovery is heterogeneous and can protect Hyper-V, VMware, and physical servers.
* **Reduce infrastructure costs**
  Lower your on-premises infrastructure costs by using Azure as a secondary site for conducting business during outages. Or, eliminate datacenter costs all together by moving to Azure and setting up disaster recovery between Azure regions. You can pre-assess network, storage, and compute resources needed to replicate applications from on-premises to Azure -  and pay only for compute and storage resources needed to run apps in Azure during outages.
* Automatically replicate to Azure
  Automate the orderly recovery of services in the event of a site outage at the primary datacenter. Automate the orderly recovery of services in the event of a site outage at the primary datacenter.
* Safeguard against outages of complex workloads
  Protect applications in SQL Server, SharePoint, SAP, and Oracle.
* Extend or boost capacity
  Applications can be Migrated to Azure with just a few clicks or burst to Azure temporarily when you encounter a surge in demand.
* Continuous heal monitoring
  Site Recovery monitors the state of your protected instances continuously and remotely from Azure. When replicating between two sites you control, your virtual machines' date and replication remains on your networks. All communication with Azure is encrypted.

:heavy_check_mark: Are you interested in any of these specific features? Which one is most important to you?

For more information, you can see:
Site Recovery -  https://azure.microsoft.com/en-us/services/site-recovery/
Site Recovery Pricing - https://azure.microsoft.com/en-us/pricing/details/site-recovery/