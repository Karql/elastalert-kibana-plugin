FROM docker.elastic.co/kibana/kibana:8.13.3

COPY ./plugins/elastalertKibanaPlugin-8.13.3.zip plugins/
RUN ./bin/kibana-plugin install file:////usr/share/kibana/plugins/elastalertKibanaPlugin-8.13.3.zip
